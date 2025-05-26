<template>
  <section>
    <header class="header">
    <div class="text-group">
      <h1 class="title">Projects</h1>
      <p class="subtitle">Shanghai, China</p>
    </div>
    <button class="github-btn" @click="loginAndGo" aria-label="Login with GitHub">
      <svg
        height="24"
        width="24"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.66 7.66 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    </button>
  </header>
    <div class="container">
      <ProjectCard
        highlight
        title="Deep Bayesian Analysis on Kidney Transplant"
        description="A research project focused on applying deep survival models to kidney transplant datasets using Bayesian methods."
        imgSrc="/images/kidney.png"
        alt="Kidney Project"
        year="2025"
        author="Heying Du"
        slug="DeepSurv-kidney"
      />
      <ProjectCard
        title="Targeted MLE"
        description="Causal effects; Mediation Analysis"
        imgSrc="/images/TMLE.png"
        alt="TMLE"
        year="2025"
        author="Heying Du"
        slug=""
      />
      <ProjectCard
        title="AI tool for data analysis"
        description="Applied AI to analyze data and provide insights."
        imgSrc="/images/ai.png"
        alt="AI tool for data analysis"
        year="2025"
        author="Heying Du"
        slug=""
      />
      <ProjectCard
        title="GMM for Mixture of Distributions"
        description="Applied GMM to model the distribution of a mixture of distributions."
        imgSrc="/images/gmm.png"
        alt="GMM"
        year="2024"
        author="Heying Du"
        slug=""
      />
      <ProjectCard
        title="Data management system development"
        description="Developed a React + Django-based dashboard for public health data visualization and institutional reporting."
        imgSrc="/images/dashboard.png"
        alt="Dashboard"
        year="2025"
        author="Heying Du"
        slug=""
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { useRouter } from 'vue-router'
import { auth, githubProvider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const router = useRouter()

const loginAndGo = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider)
    console.log('登录成功：', result.user)
    router.push('/writer/DeepSurv-kidney')
  } catch (e) {
    alert('登录失败，请重试')
    console.error(e)
  }
}
</script>

<style scoped>
.header {
  position: relative;
  height: 4rem;
  display: flex;
  align-items: center;
}

.text-group {
  width: 100%;
  text-align: center;
}
.github-btn {
  position: absolute;
  background: none;
  border: none;
  right: 2rem;
  cursor: pointer;
  color: #333;
  padding: 0;
  display: flex;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
}

.github-btn:hover {
  color: #000;
}
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