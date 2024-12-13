// import { Container } from '../ui/Container';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import { contact } from '@/src/lib/mockData/homepage/contact';

// export const Contact: React.FC = () => {
//   return (
//     <section className="py-20">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-3xl font-bold mb-8">{contact.title}</h2>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <MapPin className="w-6 h-6 text-gold" />
//                 <div>
//                   <h3 className="font-semibold">{contact.address.title}</h3>
//                   <p className="text-primary-dark">
//                     {contact.address.description}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Phone className="w-6 h-6 text-gold" />
//                 <div>
//                   <h3 className="font-semibold">{contact.telephone.title}</h3>
//                   <p className="text-primary-dark">
//                     {contact.telephone.number}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Mail className="w-6 h-6 text-gold" />
//                 <div>
//                   <h3 className="font-semibold">{contact.email.title}</h3>
//                   <p className="text-primary-dark">{contact.email.address}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Clock className="w-6 h-6 text-gold" />
//                 <div>
//                   <h3 className="font-semibold">{contact.schedules.title}</h3>
//                   {contact.schedules.data.map((schedule, index) => (
//                     <p className="text-primary-dark" key={index}>
//                       {schedule}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
//             <iframe
//               src={contact.googlemapLink}
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };
import { Container } from '../ui/Container';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contact } from '@/src/lib/mockData/homepage/contact';

export const Contact: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">{contact.title}</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-gold" />
                <div>
                  <h3 className="font-semibold">{contact.address.title}</h3>
                  <p className="text-primary-dark">
                    {contact.address.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gold" />
                <div>
                  <h3 className="font-semibold">{contact.telephone.title}</h3>
                  <p className="text-primary-dark">
                    {contact.telephone.number}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gold" />
                <div>
                  <h3 className="font-semibold">{contact.email.title}</h3>
                  <p className="text-primary-dark">{contact.email.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-gold" />
                <div>
                  <h3 className="font-semibold">{contact.schedules.title}</h3>
                  {contact.schedules.data.map((schedule, index) => (
                    <p className="text-primary-dark" key={index}>
                      {schedule}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2159385663765!2d2.2986800156744847!3d48.86923017928821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049f%3A0x5c5c5c5c5c5c5c5c!2sChamps-%C3%89lys%C3%A9es!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
