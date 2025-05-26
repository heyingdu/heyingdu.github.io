<template>
  <section>
    <h1 class="title">Projects</h1>
    <p class="subtitle">XMU | UCLA</p>
    <div class="container">
      <ProjectCard
        highlight
        title="Deep Bayesian Analysis on Kidney Transplant"
        description="A research project focused on applying deep survival models to kidney transplant datasets using Bayesian methods."
        imgSrc="/images/kidney.png"
        alt="Kidney Project"
        year="2025"
        author="Heying Du"
      />
      <ProjectCard
        title="Targeted MLE"
        description="Built with logistic regression and XGBoost to predict telecom customer churn using behavior data."
        imgSrc="/images/causal.png"
        alt="TMLE"
        year="2025"
        author="Heying Du"
      />
      <ProjectCard
        title="Purchase Conversion Analytics"
        description="Computed per-user conversion rate by analyzing product view vs. purchase patterns."
        imgSrc="/project-images/conversion.png"
        alt="Conversion Rate"
        year="2025"
        author="Heying Du"
      />
      <ProjectCard
        title="Text Classification with Transformers"
        description="Used BERT to classify research paper abstracts in biomedical science fields."
        imgSrc="/project-images/nlp.png"
        alt="NLP Text Classification"
        year="2024"
        author="Heying Du"
      />
      <ProjectCard
        title="Data Dashboard for UCLA"
        description="A React + Django-based dashboard that visualizes public health data for institutional reporting."
        imgSrc="/project-images/dashboard.png"
        alt="Interactive Dashboard"
        year="2025"
        author="Heying Du"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2px;
  font-family: "Times New Roman", serif;
}
.subtitle {
  text-align: center;
  font-size: small;
  margin-bottom: 2rem;
  font-family: "Times New Roman", serif;
}
/* 通用样式 */
.container {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.5rem;
  box-sizing: border-box;
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
  height: 330px; /* 默认固定高度 */
  box-sizing: border-box;
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
  object-fit: cover;
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

/* 高亮卡片默认样式 */
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

.card--highlight .card-content {
  padding-top: 1.5rem;
}

/* ========== 大屏电脑端 (宽度 > 1024px) ========== */
/* 使用默认样式即可 */

/* ========== 大平板 (901px ~ 1024px) ========== */
@media (max-width: 1024px) and (min-width: 901px) {
  .container {
    max-width: 95vw;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
    padding: 0 1rem;
  }

  .card {
    height: 300px;
  }

  .card img {
    height: 160px;
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
    height: 300px;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
  }

  .card--highlight img {
    width: 50%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .card--highlight .card-content {
    padding: 1rem;
    flex: 1;
  }
}

/* ========== 中平板 (769px ~ 900px) ========== */
@media (max-width: 900px) and (min-width: 769px) {
  .container {
    max-width: 90vw;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0 1rem;
  }

  .card {
    height: 280px;
  }

  .card img {
    height: 140px;
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
    height: 140px;
    width: 40%;
    object-fit: cover;
  }

  .card--highlight .card-content {
    flex: 1;
    padding-left: 1rem;
  }
}

/* ========== 手机 (≤ 768px) ========== */
@media (max-width: 768px) {
  .container {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, calc((80vw - 1rem) / 2));
    gap: 1rem;
    padding: 0;
  }

  .card {
    height: 260px;
  }

  .card img {
    height: 120px;
  }

  .card h3 {
    font-size: 0.9rem;
  }

  .card p {
    font-size: 0.8rem;
  }

  .card--highlight {
    grid-column: 1 / -1;
    flex-direction: column;
    width: 100% !important;
    margin: 0 !important;
    box-sizing: border-box;
    height: 330px;
  }

  .card--highlight img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
}
</style>