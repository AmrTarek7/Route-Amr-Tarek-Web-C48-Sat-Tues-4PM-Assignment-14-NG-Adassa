import { Component } from '@angular/core';
import { ValueCard } from './components/value-card/value-card';

export interface ValueCardIF {
  id: number;
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

@Component({
  selector: 'app-values-section',
  imports: [ValueCard],
  templateUrl: './values-section.html',
  styleUrl: './values-section.css',
})
export class ValuesSection {
  //
  valueCards: ValueCardIF[] = [
    {
      id: 1,
      icon: 'fa-solid fa-bullseye',
      title: 'الجودة أولاً',
      description: 'محتوى مدروس ومكتوب بخبرة',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      id: 2,
      icon: 'fa-solid fa-bolt',
      title: 'تركيز عملي',
      description: 'أمثلة واقعية يمكنك تطبيقها اليوم',
      gradient: 'from-orange-600 to-orange-400',
    },
    {
      id: 3,
      icon: 'fa-solid fa-handshake',
      title: 'المجتمع',
      description: 'تعلم مع آلاف المصورين',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      id: 4,
      icon: 'fa-solid fa-arrows-rotate',
      title: 'دائماً محدث',
      description: 'أحدث الاتجاهات وأفضل الممارسات',
      gradient: 'from-orange-600 to-orange-400',
    },
  ];
}
