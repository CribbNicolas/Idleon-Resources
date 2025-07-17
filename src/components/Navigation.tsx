import { createSignal, For } from 'solid-js';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface NavigationItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
  badge?: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: 'idleon-gpt',
    title: 'IdelonGPT',
    description: 'Resumen hecho en base de las fuentes con IA (mas IA search)',
    href: '/idleon-gpt',
    icon: '🤖',
    badge: 'AI'
  },
  {
    id: 'sources',
    title: 'Fuentes',
    description: 'Fuentes varias de informacion, excels muy utiles para tener una idea clara de que prestar atencion',
    href: '/sources',
    icon: '📚',
    badge: 'Resources'
  },
  {
    id: 'tools',
    title: 'Herramientas',
    description: 'Webs de herramientas para el juego',
    href: '/tools',
    icon: '🛠️',
    badge: 'Tools'
  },
  {
    id: 'character-routes',
    title: 'Ruta de personajes',
    description: 'Guías completas para el desarrollo de personajes',
    href: '/character-routes',
    icon: '🎯',
    badge: 'Guide'
  }
];

export default function Navigation() {
  const [hoveredItem, setHoveredItem] = createSignal<string | null>(null);

  return (
    <div class="navigation-grid">
      <For each={navigationItems}>
        {(item) => (
          <Card
            class="navigation-card"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div class="card-header">
              <div class="card-icon">{item.icon}</div>
              <div class="card-title-section">
                <h3 class="card-title">{item.title}</h3>
                {item.badge && (
                  <Badge variant="secondary" class="card-badge">
                    {item.badge}
                  </Badge>
                )}
              </div>
            </div>
            
            <p class="card-description">{item.description}</p>
            
            <div class="card-footer">
              <Button
                as="a"
                href={item.href}
                variant={hoveredItem() === item.id ? 'default' : 'outline'}
                class="card-button"
              >
                Explorar
                <span class="button-arrow">→</span>
              </Button>
            </div>
          </Card>
        )}
      </For>
    </div>
  );
}