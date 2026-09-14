// Campus Connect Portal - TabBar Component (Experiment 5)
// Reusable navigation bar that manages view switches using props and event callbacks

export default function TabBar({ tabs = [], activeTab, onTabChange }) {
  return (
    <nav className="portal-tabs-bar" aria-label="Portal Navigation Tabs">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            className={`portal-tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-selected={isActive}
            role="tab"
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
