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
        description="Causal effects; Mediation Analysis"
        imgSrc="/images/TMLE.png"
        alt="TMLE"
        year="2025"
        author="Heying Du"
      />
      <ProjectCard
        title="AI tool for data analysis"
        description="Applied AI to analyze data and provide insights."
        imgSrc="/images/ai.png"
        alt="AI tool for data analysis"
        year="2025"
        author="Heying Du"
      />
      <ProjectCard
        title="GMM for Mixture of Distributions"
        description="Applied GMM to model the distribution of a mixture of distributions."
        imgSrc="/images/gmm.png"
        alt="GMM"
        year="2024"
        author="Heying Du"
      />
      <ProjectCard
        title="Data management system development"
        description="Developed a React + Django-based dashboard for public health data visualization and institutional reporting."
        imgSrc="/images/dashboard.png"
        alt="Dashboard"
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
    max-width: 100%;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    box-sizing: border-box;
    overflow-x: hidden;
  }
}
</style>