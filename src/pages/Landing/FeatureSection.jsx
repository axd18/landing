import React from 'react';

const FeatureSection = () => {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl xl:text-5xl font-pj">Funcionalidades que te van ayudar con la organización</h2>
                    {/* <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit</p> */}
                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                    {/* Feature 1 - Reservas de camas */}
                    <div className="md:p-8 lg:p-14">
                        <img 
                            src="/features/camas-icon.svg" 
                            alt="Icono reservas de camas"
                            className="mx-auto h-auto w-auto"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Reservas de camas</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Evitá dobles agendamientos y maximiza tu ocupación y todo bajo control.</p>
                    </div>

                    {/* Feature 2 - Sales */}
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                        <img 
                            src="/features/illus-icon.svg" 
                            alt="Icono sales"
                            className="mx-auto h-auto w-auto"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Asistencia bajo control</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Controlá quién viene, quién falta y cuántas clases le quedan a cada cliente.</p>
                    </div>

                    {/* Feature 3 - Onboarding */}
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                        <img 
                            src="/features/illus-icon-2.svg" 
                            alt="Icono onboarding"
                            className="mx-auto h-auto w-auto"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Gestión de cobros</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Llevá el control de los cobros y deudas a simple vista.</p>
                    </div>

                    {/* Feature 4 - Product */}
                    <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                        <img 
                            src="/features/illus-icon-3.svg" 
                            alt="Icono product"
                            className="mx-auto h-auto w-auto"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Registro de Profesores</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Podés gestionar los horarios y pagos de los profesores.</p>
                    </div>

                    {/* Feature 5 - Quality */}
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                        <img 
                            src="/features/illus-icon-4.svg" 
                            alt="Icono quality"
                            className="mx-auto h-auto w-auto"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Calendario</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Incluye un calendario donde podés agregar eventos y de fácil acceso.</p>
                    </div>

                    {/* Feature 6 - Result */}
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                        <img 
                            src="/features/illus-icon-5.svg" 
                            alt="Icono result"
                            className="mx-auto h-auto w-auto"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Gestión de clientes</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Registrá tus clientes creando una base de datos y lleva el control de sus actividades.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;