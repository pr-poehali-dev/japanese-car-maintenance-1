import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const services = [
    {
      icon: 'Scan',
      title: 'Компьютерная диагностика',
      description: 'Полная диагностика всех систем японских автомобилей с использованием профессионального оборудования'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт двигателя',
      description: 'Капитальный и текущий ремонт двигателей японских автомобилей любой сложности'
    },
    {
      icon: 'Cog',
      title: 'Обслуживание АКПП',
      description: 'Диагностика, ремонт и замена масла в автоматических коробках передач'
    },
    {
      icon: 'Zap',
      title: 'Электрика и электроника',
      description: 'Ремонт электрооборудования, блоков управления и электронных систем'
    },
    {
      icon: 'Wind',
      title: 'Климат-контроль',
      description: 'Диагностика и ремонт систем кондиционирования и отопления'
    },
    {
      icon: 'Settings',
      title: 'Техническое обслуживание',
      description: 'Плановое ТО согласно регламенту производителя с использованием оригинальных запчастей'
    }
  ];

  const prices = [
    { service: 'Компьютерная диагностика', price: 'от 1500 ₽' },
    { service: 'Замена масла и фильтров', price: 'от 2000 ₽' },
    { service: 'Диагностика ходовой части', price: 'от 1800 ₽' },
    { service: 'Ремонт двигателя', price: 'от 15000 ₽' },
    { service: 'Обслуживание АКПП', price: 'от 8000 ₽' },
    { service: 'Ремонт электрики', price: 'от 3000 ₽' }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      car: 'Toyota Camry',
      text: 'Отличный сервис! Быстро нашли проблему с помощью компьютерной диагностики. Ремонт выполнили качественно.',
      rating: 5
    },
    {
      name: 'Дмитрий К.',
      car: 'Honda CR-V',
      text: 'Обслуживаюсь здесь уже 3 года. Профессионалы своего дела, всегда качественно и в срок.',
      rating: 5
    },
    {
      name: 'Сергей П.',
      car: 'Nissan X-Trail',
      text: 'Сделали капитальный ремонт двигателя. Машина работает как новая. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Car" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-secondary">JapanAutoService</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'about', 'prices', 'reviews', 'guarantee', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'О нас'}
                  {section === 'prices' && 'Прайс'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'guarantee' && 'Гарантии'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('booking')} className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
                Техническое обслуживание <span className="text-primary">японских</span> автомобилей
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная компьютерная диагностика всех систем японских автомобилей
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('booking')} className="bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на диагностику
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/3ce608da-d387-4f9b-89a6-403969190056/files/38cdcb02-99cf-4f70-bc02-cb08a8d3e934.jpg"
                alt="Компьютерная диагностика японских автомобилей"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">
              Полный спектр услуг по обслуживанию японских автомобилей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-secondary">О нашем сервисе</h2>
              <p className="text-muted-foreground text-lg">
                Мы специализируемся на обслуживании японских автомобилей с 2010 года. Наша команда —
                это сертифицированные мастера с многолетним опытом работы с брендами Toyota, Honda,
                Nissan, Mazda, Subaru и другими японскими марками.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Опыт более 13 лет</h3>
                    <p className="text-muted-foreground">
                      Обслужили более 5000 автомобилей японских марок
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Monitor" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Современное оборудование</h3>
                    <p className="text-muted-foreground">
                      Профессиональное диагностическое оборудование для всех систем
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Сертифицированные мастера</h3>
                    <p className="text-muted-foreground">
                      Команда профессионалов с опытом работы на официальных дилерах
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/3ce608da-d387-4f9b-89a6-403969190056/files/4d521e71-3e33-418b-95b1-ab68f6ad4969.jpg"
                alt="Ремонт японских автомобилей"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground text-lg">
              Ориентировочная стоимость услуг
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-0">
                {prices.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-6 ${
                      index !== prices.length - 1 ? 'border-b' : ''
                    } hover:bg-muted/50 transition-colors`}
                  >
                    <span className="font-medium text-secondary">{item.service}</span>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <p className="text-center text-sm text-muted-foreground mt-6">
              * Точная стоимость определяется после диагностики
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-secondary">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.car}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantee" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши гарантии</h2>
            <p className="text-muted-foreground text-lg">
              Мы уверены в качестве нашей работы
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-secondary hover:text-primary">
                Гарантия на выполненные работы
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы предоставляем гарантию на все виды выполненных работ сроком до 12 месяцев или 20 000 км
                пробега в зависимости от типа работ. Гарантия распространяется на дефекты, возникшие по
                вине сервиса.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-secondary hover:text-primary">
                Гарантия на запчасти
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                На все оригинальные запчасти действует гарантия производителя. На неоригинальные запчасти
                гарантия от 6 до 12 месяцев в зависимости от бренда и типа детали.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-secondary hover:text-primary">
                Прозрачность цен
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Стоимость работ согласовывается с клиентом до начала ремонта. Мы не проводим дополнительные
                работы без вашего согласия. Все цены указаны в договоре.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-secondary hover:text-primary">
                Качество работ
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Все работы выполняются сертифицированными мастерами с использованием профессионального
                оборудования. После ремонта проводится контрольная диагностика.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="booking" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Записаться на диагностику</h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="border-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" className="border-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Марка и модель автомобиля</label>
                  <Input placeholder="Toyota Camry" className="border-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Год выпуска</label>
                  <Input placeholder="2018" className="border-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Описание проблемы</label>
                  <Textarea
                    placeholder="Опишите, что вас беспокоит в работе автомобиля"
                    className="border-2 min-h-[120px]"
                  />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">
              Мы всегда рады вам помочь
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-1">Пн-Сб: 9:00 - 20:00</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва</p>
                <p className="text-muted-foreground">ул. Автосервисная, 123</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">Email</h3>
                <p className="text-muted-foreground">info@japanservice.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Ответим в течение дня</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Car" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold">JapanAutoService</span>
          </div>
          <p className="text-white/70 mb-6">
            Профессиональное обслуживание японских автомобилей с 2010 года
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <button className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </button>
            <button className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </button>
            <button className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </button>
          </div>
          <p className="text-sm text-white/50">
            © 2024 JapanAutoService. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}