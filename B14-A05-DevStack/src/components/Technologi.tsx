export default function Technologi({
  technology,
  onAdd,
  isAdded,
}: {
  technology;
  onAdd;
  isAdded;
}) {
  const hendalAddToStack = () => {
    onAdd(technology);
  };

  return (
    // Card Section
    <div>
      <div>
        <div className="w-full h-97.5 max-w-sm rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          {/* Top row: icon + badge */}
          <div className="flex items-start justify-between">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-11 w-11"
            />
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                technology.badge === "Cache"
                  ? "bg-red-50 text-red-600"
                  : technology.badge === "Ubiquitous"
                    ? "bg-yellow-50 text-orange-600"
                    : technology.badge === "Essential"
                      ? "bg-sky-50 text-sky-600"
                      : technology.badge === "Robust"
                        ? "bg-sky-50 text-sky-600"
                        : technology.badge === "Modern"
                          ? "bg-cyan-50 text-cyan-600"
                          : technology.badge === "Containers"
                            ? "bg-sky-50 text-sky-600"
                            : technology.badge === "Popular"
                              ? "bg-sky-50 text-sky-600"
                              : technology.badge === "Versatile"
                                ? "bg-emerald-50 text-emerald-600"
                                : technology.badge === "Fast"
                                  ? "bg-orange-50 text-orange-600"
                                  : technology.badge === "SSR / Edge"
                                    ? "bg-purple-50 text-purple-600"
                                    : technology.badge === "Standard"
                                      ? "bg-emerald-50 text-emerald-600"
                                      : technology.badge === "Top SQL"
                                        ? "bg-blue-50 text-blue-600"
                                        : "bg-gray-50 text-gray-600"
              }`}
            >
              {technology.badge}
            </span>
          </div>
          {/* Name */}
          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            {technology.name}
          </h2>
          {/* Description */}
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
            {technology.description}
          </p>
          {/* Divider */}
          <div className="mt-5 border-t border-gray-100" />
          {/* Meta row: category, difficulty, rating */}
          <div className="mt-5 flex items-start justify-between">
            <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700">
              {technology.category}
            </span>
            <span className="flex items-center text-[15px] text-gray-500">
              {technology.difficulty}
            </span>
            <span className="flex items-center gap-1 text-[15px] font-medium text-gray-900">
              <span className="text-amber-400">★</span>
              {technology.rating}
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={hendalAddToStack}
            disabled={isAdded}
            className={`mt-6 w-full rounded-2xl bg-gray-900 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-black active:bg-[#202020bf] cursor-pointer ${isAdded ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isAdded ? "✓ Add to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}
