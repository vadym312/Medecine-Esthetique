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
              src={contact.googlemapLink}
              width="100%"
              height="100%"
              title='contact_map'
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
