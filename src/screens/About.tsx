import { Layout } from '../layout/MainLayout';

export default function About() {
  return (
    <Layout>
      <div className="flex  h-screen p-20">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold  text-left">Nosotros</h1>
          <h1 className="text-base d text-left">
            CoVasn Snow Rental e suna empresa dedicada al equipamiento y
            servicio completo de Snowboard. Una vez que recibamos su reserva, su
            conserje de snowboard personal llevara todo a su alojamiento a la
            hora de entre programada. Personazaliremos su equipo de alquiler a
            partir de nuestra amplia selección en equipamiento de Snowboard
            según su paquete de alquiler y su nivel de habiliadades.
          </h1>
          <h1 className="text-3xl font-bold  text-left">Taller</h1>
          <h1 className="text-base d text-left">
            En CoVans, ubicados en el corazón de Ushuaia, Argentina, entendemos
            la pasión y el espíritu de la comunidad de snowboard. Nuestro taller
            especializado ofrece un servicio completo de reparación y
            mantenimiento para garantizar que tu equipo esté siempre en las
            mejores condiciones.
          </h1>
          <h1 className="text-lg font-bold  text-left">
            Servicios Profesionales de Mantenimiento y Reparación
          </h1>
          <h1 className="text-base d text-left">
            Ya sea que tu tabla necesite una reparación urgente o un
            mantenimiento de rutina, nuestro equipo de técnicos expertos está
            aquí para ayudarte. Nos enorgullecemos de ofrecer servicios de la
            más alta calidad, incluyendo:
          </h1>
          <ul className="list-disc space-y-4 text-left ml-8 shadow">
            <li>
              <strong>Encerado y Afilado de Cantos:</strong> Para una mejor
              tracción y un deslizamiento suave, nuestro servicio de encerado y
              afilado de cantos dejará tu tabla lista para enfrentar cualquier
              pista.
            </li>
            <li>
              <strong>Reparaciones de Base:</strong> Golpes y rasguños son
              comunes en el deporte. Nosotros nos ocupamos de reparar la base de
              tu tabla, rellenando cualquier daño y restaurándola a su estado
              óptimo.
            </li>
            <li>
              <strong>Ajustes de Fijaciones:</strong> Las fijaciones son
              esenciales para tu seguridad y rendimiento. Nuestro equipo se
              asegura de que estén correctamente ajustadas y funcionando a la
              perfección.
            </li>
            <li>
              <strong>Personalización y Asesoramiento:</strong> Te ofrecemos
              asesoramiento personalizado para adaptar tu tabla a tu estilo y
              necesidades específicas.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
