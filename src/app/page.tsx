export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-4">
          Billtracky
        </h1>
        <p className="text-center text-lg mb-8">
          Sistema de Gestión de Pedidos y Pagos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">📦 Pedidos</h2>
            <p className="text-gray-600">Gestiona tus pedidos de manera eficiente</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">💰 Pagos</h2>
            <p className="text-gray-600">Control total de pagos y transacciones</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">👥 Empleados</h2>
            <p className="text-gray-600">Administra tu equipo de trabajo</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Configurando base de datos PostgreSQL...</p>
          <p className="mt-2">Por favor, configura las variables de entorno para continuar.</p>
        </div>
      </div>
    </main>
  );
}
