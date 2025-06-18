import { useInView } from "@/hooks/useInView";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Internship at Rumango Software and Consulting Services Private Limited",
    image: "First_Internship_Certificate_Rumango_Preview_Image.png",
    pdf: "First_Internship_Certificate_Rumango.pdf",
    isPdf: true,
  },
  {
    id: 2,
    title: "J2SE (Core Java) Completion Certificate.",
    image: "durgasoft_java_certificate_image.jpg",
    isPdf: false,
  },
  {
    id: 3,
    title: " Growth Engine for Your Business",
    image: "hp_certificate_image.png",
    isPdf: false,
  },
];

const Certificates = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [api, setApi] = useState<any>();
  const [modalCert, setModalCert] = useState<any>(null);
  const [touching, setTouching] = useState(false);

  useEffect(() => {
    if (!api || touching) return;
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api, touching]);

  return (
    <section id="certificates" className="py-20 px-4 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-orange-500">Certificates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that showcase my technical expertise
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Carousel
            setApi={setApi}
            className="w-full mx-auto"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent
              onTouchStart={() => setTouching(true)}
              onTouchEnd={() => setTimeout(() => setTouching(false), 1000)}
            >
              {certificates.map((cert) => (
                <CarouselItem key={cert.id} className="basis-full">
                  <div className="p-2">
                    <Card className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-0">
                        <div
                          className="relative overflow-hidden rounded-lg cursor-pointer"
                          onClick={() => setModalCert(cert)}
                        >
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-auto max-h-[70vh] md:max-h-[600px] object-contain"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!modalCert} onOpenChange={() => setModalCert(null)}>
        <DialogContent className="max-w-4xl bg-gray-900 p-4">
          {modalCert && (
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-4">{modalCert.title}</h3>
              {modalCert.isPdf ? (
                <iframe
                  src={modalCert.pdf}
                  className="w-full h-[80vh] rounded"
                  title="PDF Certificate"
                />
              ) : (
                <img
                  src={modalCert.image}
                  alt={modalCert.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certificates;
