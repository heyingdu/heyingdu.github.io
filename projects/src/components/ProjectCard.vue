<template>
  <div :class="['card', highlight ? 'card--highlight' : '']">
    <img :src="imgSrc" :alt="alt" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="meta">{{ year }} · {{ author }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
  year: string;
  author: string;
  highlight?: boolean;
}>();
</script>

<style scoped>
.container {
      max-width: 1000px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background-color: #fff;
      border-radius: 14px;
      padding: 1rem;
      padding-top: 0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s;
      height: 330px; /* Fixed height */
    }

    .card:hover {
      transform: translateY(-3px);
    }

    .card img {
      width: 100%;
      height: 170px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-content {
      text-align: left;
      font-family: "Times New Roman", serif;
      padding: 0rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .card h3 {
      margin-top: 0;
      font-size: 1.1rem;
      color: #111;
      margin-bottom: 0.55rem;
    }

    .card p {
      margin-top: 0;
      font-size: 0.95rem;
      color: #555;
    }

    .meta {
      margin-top: auto; 
      font-size: 0.8rem;
      color: #999;
    }

    .card--highlight {
      grid-column: span 4;
      grid-row: span 2;
      display: flex;
      flex-direction: row;
    }

    .card--highlight img {
      height: auto;
      object-fit: contain;
    }

    @media (max-width: 1024px) {
      .card--highlight {
        grid-column: span 2;
        grid-row: span 2;
      }
    }

    @media (max-width: 768px) {
      .card--highlight {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
</style>