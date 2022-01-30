<script setup>
import ProductCard from './components/templates/ProductCard.vue';
</script>

<template>
  <ProductCard 
    :productDetail="{
      descriptionText: 'Белое сухое вино, изготовленное из винограда сорта Мелонь де Бургонь, который произрастает на виноградниках в апелласьоне Мюскаде Севр э Мен. Сбор урожая проводится только по достижении ягодами оптимальной зрелости.',
      ratingLink: { link: { url: '#', name: '23 отзыва' }, listLink: { url: '#', name: 'Характеристики' } },
      h2Title: 'Chateau de la Turmeliere, Muscadet Sevre et Maine Sur Lie AOP, 2020',
      h3Title: 'Тип вина',
      code: '123456',
      imageSrc: 'src/assets/bottle.png',
      saleText: '-24%',
      buttonText: 'Развернуть',
      actionText: 'Купили 86 раз за сутки',
      expertText: { lg: '98', sm: 'Wine 98' },
      offerPrice: { type: 'sale', price: { previous: '2 990', current: '1 890' } } 
    }" />
</template>
