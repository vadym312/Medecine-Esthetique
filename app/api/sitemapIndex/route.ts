import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const clientEmail = "api-491@medecine-esthetique-456920.iam.gserviceaccount.com";
const privateKey = `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsgC7jgXEDa+68\npd2ss7G9t2HExUiDZuf0UQYJlJAUDA+h+Uuni62I6yuqpZ9F7G7gzyne2I5qjxBM\n7IxTUkme67Rf2uallpArNeP7bKNZrQCEZgSqvIKgM1hko3Uvhkx7o+BX5npwMV52\n9qAQ1dUX0o/222yVLR33ph2r4vvVljowBO0sEcvYa3zpRnsvXQ0lcGTGJzC1u6qP\nVaJl3M9s/3x9yMGbTr6/PiFiU+bFjcNPkDrpCpxAt8gxrLCCEyPmqIdCDUSTL2ha\nPmqVLnwKJ9hZafFuLnsZgOgichBnnjPojAZdoVhV6GG4QE1OL6LCCRkvLh9PSWWd\nDUCAec5RAgMBAAECggEAA1R+0zsv+dTEaUA7InbeQwnTvtnfd6iYaLyEWnyo4reF\njmcYIUtj1bqof0+u3p7dAxpXYMBwe2PN+OuGHU5U3SxdW+OyGSyUwD4hlmch/idb\nVQhSexNO4usq1S0x+XFlGkFEdvNG63yLKiPCXPYrz3Jr/2QmrqM41WDlE2jl21kr\ndd/0RWDST/ySYihYVU19UhCmDRqC7A435+SVoi06ryB4vnIsU1Qdvmv4JNJl2Mwv\nnSq4Z3N3HchOix3inmstXR6yonr77dDRHTrRaY7n5D0O/1TqRE3ycWvzzRx6T8/g\n4UkGZKnSiCqvI2vMc8TYPrKHybIAThEsIqfVHtuLiwKBgQDclT941dhcH0Ifkk0z\n+3CBbfhemnqfYzw2GRbiaCs93pGbLcfqDH6elqSlWnES3QqURU7A8haFmSrE/8be\noygsGJcewal3isdmkLA+2AKsqoEXffWIKA83QWgz3KlevYmxCXIDdWF2fOLjpD9P\nKl6AnB+ljgSNGZ56fdjCZTLZ1wKBgQDIMpS6LgGm3gulbeTGlS/ES3Tl4RjrDHVH\nLntqE5McMRU+2KL3bUTucQeUn84No18MozHQZhE2Z/8RrZQgQGwBwsqrvsFnXH+P\nhT5zspW2yxKoF5pDdVwwLQBYDtMYu/L7+bqrudXQYX47DAYk+fj+FqWIwzuUa+8z\n3a9/AyokFwKBgBPlJjdo2j3c1+LvGCWDHS+fUpJ9zmeH1MtwUd8T1CqdY3ail3Bl\nthnprmn3kVFJPIYJBkRi0WM1YGUqSK6V+q6XfTHZ98X/b2Kx1COm6f7W1hPfWYDx\nVAYA0Tw0P9Z6s+uS1YS4VpUQSIqNquQiByoEatpMx95OHDwiE6Xc6Mw7AoGBAIAN\nEmJv0PCp8GsU+pMmk5IL7a6oJycZJd6s1ZXJBXyvzHYRXVPD2aZmN8IR4VuJ1t8f\nd1pkHrhdFqJ5E1j5u9v4e2gVMGHroU/sm0CnxulPxRQtXKevZpMOBb1NZirY9RfE\n6Wi0ChYqdfJQw5FdLq1fUOxEbFSIIU1ci8dC/+5rAoGBAKUirNRkvjEZyGRC85Lr\nOubxe0wJGa+6G5IanpBB6ksaXjKGSdPFf8Q+yxWJrYak5V8fcdyaZ2ZxoK6zk8ki\na2AtX71y1l8csUag52dh2hjz1bOeVC8I4+2+5f4jn9oux1+KpoMVYN3vma8kwSIM\nMMr2h9102BFJNpcbwBM1kBbY\n-----END PRIVATE KEY-----\n`;

const jwtClient = new google.auth.JWT(
  clientEmail,
  undefined,
  privateKey,
  ["https://www.googleapis.com/auth/indexing"]
);

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    await jwtClient.authorize();

    const response = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtClient.credentials.access_token}`,
      },
      body: JSON.stringify({
        url,
        type: "URL_UPDATED",
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, error: errorText }, { status: response.status });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
