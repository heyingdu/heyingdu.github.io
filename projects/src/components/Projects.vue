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
.container {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.5rem;
  box-sizing: border-box;
}

@media (max-width: 1024px) and (min-width: 901px) {
  .container {
    max-width: 95vw;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
    padding: 0 1rem;
  }
}

@media (max-width: 900px) and (min-width: 769px) {
  .container {
    max-width: 90vw;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, calc((90vw - 1rem) / 2));
    gap: 1rem;
    padding: 0;
  }
}
</style>