<template>
 <router-link
  :to="`/posts/${slug}`"
  custom
  v-slot="{ navigate }"
>
  <div
    :class="['card', highlight ? 'card--highlight' : '']"
    @click="navigate"
    style="cursor: pointer"
  >
    <img :src="imgSrc" :alt="alt" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="meta">{{ year }} · {{ author }}</div>
    </div>
  </div>
</router-link>
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
  slug:string;
}>();
</script>

<style scoped>
.meta {
  margin-top: auto;
  font-size: 0.6rem;
  color: #999;
}
.card--highlight .meta {
  margin-top: auto;
  font-size: 0.8rem;
  color: #999;
  text-align: right;
}
.card {
  background-color: #fff;
  border-radius: 14px;
  padding: 1rem 1rem 0 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  height: 330px;
  box-sizing: border-box;
}

.card:hover {
  transform: translateY(-3px);
}

.card img {
  width: 100%;
  height: 50%;
  object-fit: contain;
  display: block;
}

.card-content {
  text-align: left;
  font-family: "Times New Roman", serif;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card h3 {
  margin-top: 0;
  font-size: 1.1rem;
  color: #111;
  margin-bottom: 0;
}

.card p {
  max-height: 5.4em;
  margin-top: 0;
  font-size: 0.9rem;
  color: #555;
}

.card--highlight {
  grid-column: span 4;
  grid-row: span 2;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.card--highlight img {
  width: 100%;
  max-width: 60%;
  height: auto;
  object-fit: contain;
  display: block;
  flex-shrink: 1;
}

.card--highlight .card-content {
  flex: 1;
  min-width: 0;
  padding: 1rem;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-break: break-word;
}

@media (max-width: 1024px) and (min-width: 901px) {
  .card {
    height: 300px;
  }

  .card img {
    width: 100%;
    height: 50%;
    object-fit: contain;
    display: block;
  }

  .card h3 {
    font-size: 1.05rem;
  }

  .card p {
    font-size: 0.9rem;
  }

  .card--highlight {
  grid-column: span 4;
  grid-row: span 2;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.card--highlight img {
  width: 60%;
  max-width: 60%;
  height: auto;
  object-fit: contain;
  display: block;
  flex-shrink: 1;
}

.card--highlight .card-content {
  flex: 1;
  min-width: 0;
  padding: 1rem;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-break: break-word;
}
}

@media (max-width: 900px) and (min-width: 769px) {
  .card {
    height: 280px;
  }

  .card img {
    width: 100%;
    max-height: 50%;
    object-fit: contain;
    display: block;
    box-sizing: border-box;
  }

  .card h3 {
    font-size: 1rem;
  }

  .card p {
    font-size: 0.85rem;
  }

  .card--highlight {
    grid-column: span 3;
    grid-row: span 1;
    height: auto;
    min-height: 280px;
  }

  .card--highlight img {
    width: 60%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .card--highlight .card-content {
    flex: 1;
    padding-left: 1rem;
  }
}

@media (max-width: 768px) {
  .card {
    height: 300px !important;
    padding: 1rem !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .card img {
    width: 100% !important;
    height: 120px !important;
    object-fit: contain !important;
    display: block !important;
    margin-bottom: 0.5rem !important;
  }

  .card-content {
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    min-height: 0 !important;
  }

  .card h3 {
    font-size: 0.9rem !important;
    margin: 0 0 0.5rem 0 !important;
  }

  .card p {
    font-size: 0.8rem !important;
    flex: 1 !important;
    margin: 0 !important;
    overflow: hidden !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 3 !important;
    -webkit-box-orient: vertical !important;
  }

  .card .meta {
    margin-top: auto !important;
    flex-shrink: 0 !important;
  }

  /* highlight 卡片 */
  .card--highlight {
    display: flex !important;
    grid-column: span 2 !important;
    flex-direction: column !important;
    width: 100% !important;
    margin: 0 !important;
    box-sizing: border-box !important;
    height: 350px !important;
    padding: 1rem !important;
  }

  .card--highlight img {
    width: 100% !important;
    height: 150px !important;
    object-fit: contain !important;
    display: block !important;
    margin-bottom: 0.5rem !important;
    background-color: #f8f9fa !important;
  }

  .card--highlight .card-content {
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    min-height: 0 !important;
    padding: 0 !important;
  }

  .card--highlight h3 {
    font-size: 1rem !important;
    margin: 0 0 0.5rem 0 !important;
  }

  .card--highlight p {
    font-size: 0.85rem !important;
    flex: 1 !important;
    margin: 0 !important;
    overflow: hidden !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 4 !important;
    -webkit-box-orient: vertical !important;
  }

  .card--highlight .meta {
    margin-top: auto !important;
    flex-shrink: 0 !important;
    font-size: 0.8rem !important;
    text-align: left !important;
  }
}
</style>