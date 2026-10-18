<script setup lang="ts">
const route = useRoute()
const nav = [
  { to: '/', label: 'Início', icon: '⌂' }, { to: '/lessons', label: 'Aulas', icon: '◈' },
  { to: '/characters', label: 'Dicionário', icon: '字' }, { to: '/review', label: 'Revisar', icon: '↻' },
  { to: '/reader', label: 'Leitor', icon: '文' }, { to: '/pinyin', label: 'Pinyin', icon: '音' },
  { to: '/stats', label: 'Estatísticas', icon: '▥' }, { to: '/radicals', label: 'Radicais', icon: '部' },
  { to: '/achievements', label: 'Conquistas', icon: '◆' }
]
</script>
<template>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand"><span class="brand-mark">汉</span><div><b>HanziPath</b><small>汉字之路</small></div></div>
      <p class="eyebrow side-label">SEU CAMINHO</p>
      <nav><NuxtLink v-for="item in nav" :key="item.to" :to="item.to" :class="{ active: route.path === item.to }"><span class="nav-icon">{{ item.icon }}</span>{{ item.label }}</NuxtLink></nav>
      <div class="sidebar-bottom"><NuxtLink to="/settings">⚙ Configurações</NuxtLink><div class="offline-dot"><span/> Dados salvos localmente</div></div>
    </aside>
    <main class="main-content"><header class="topbar"><div><span class="eyebrow">DOMINGO, 18 DE OUTUBRO</span><h1 v-if="route.path === '/'">Bom dia, Phelipe <span>☀</span></h1><h1 v-else>HanziPath</h1></div><button class="avatar">P</button></header><NuxtPage /></main>
    <nav class="mobile-nav"><NuxtLink v-for="item in nav" :key="item.to" :to="item.to" :class="{ active: route.path === item.to }"><span>{{ item.icon }}</span><small>{{ item.label }}</small></NuxtLink></nav>
  </div>
</template>
