interface SpecificationHighlightsProps {
  specs: any;
}

export default function SpecificationHighlights({ specs }: SpecificationHighlightsProps) {
  const highlights = [
    {
      label: 'Konsumsi BBM',
      value: specs.performance.fuelConsumption,
      icon: '⛽',
    },
    {
      label: 'Mesin',
      value: specs.performance.engine,
      icon: '⚙️',
    },
    {
      label: 'Tenaga',
      value: specs.performance.maxPower,
      icon: '🐎',
    },
    {
      label: 'Transmisi',
      value: specs.performance.transmission,
      icon: '🔧',
    },
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{item.value}</div>
              <div className="text-sm text-gray-600 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}