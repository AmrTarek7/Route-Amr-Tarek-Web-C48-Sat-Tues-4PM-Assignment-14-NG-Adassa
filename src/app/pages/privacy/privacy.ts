import { Component } from '@angular/core';
import { PricacyHero } from './components/pricacy-hero/pricacy-hero';
import { PrivacyPolicyHeader } from './components/privacy-policy-header/privacy-policy-header';
import { PolicyCheckList } from './components/policy-check-list/policy-check-list';

export interface PolicyCheckItem {
  id: number;
  title?: string;
  description: string;
}

@Component({
  selector: 'app-privacy',
  imports: [PricacyHero, PrivacyPolicyHeader, PolicyCheckList],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  collectedInformation: PolicyCheckItem[] = [
    {
      id: 1,
      title: 'بيانات الهوية:',
      description: 'تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.',
    },
    {
      id: 2,
      title: 'بيانات الاتصال:',
      description: 'تشمل عنوان البريد الإلكتروني.',
    },
    {
      id: 3,
      title: 'البيانات التقنية:',
      description: 'تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.',
    },
    {
      id: 4,
      title: 'بيانات الاستخدام:',
      description: 'تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.',
    },
  ];

  informationUsage: PolicyCheckItem[] = [
    {
      id: 1,
      description: 'لتقديم خدمتنا والحفاظ عليها',
    },
    {
      id: 2,
      description: 'لإخطارك بالتغييرات في خدمتنا',
    },
    {
      id: 3,
      description: 'لتقديم دعم العملاء',
    },
    {
      id: 4,
      description: 'لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا',
    },
    {
      id: 5,
      description: 'لمراقبة استخدام خدمتنا',
    },
    {
      id: 6,
      description: 'لاكتشاف ومنع ومعالجة المشاكل التقنية',
    },
  ];

  userRights: PolicyCheckItem[] = [
    {
      id: 1,
      description: 'طلب الوصول إلى بياناتك الشخصية',
    },
    {
      id: 2,
      description: 'طلب تصحيح بياناتك الشخصية',
    },
    {
      id: 3,
      description: 'طلب مسح بياناتك الشخصية',
    },
    {
      id: 4,
      description: 'الاعتراض على معالجة بياناتك الشخصية',
    },
    {
      id: 5,
      description: 'طلب تقييد معالجة بياناتك الشخصية',
    },
    {
      id: 6,
      description: 'الحق في سحب الموافقة',
    },
  ];
}
