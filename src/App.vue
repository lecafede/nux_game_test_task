<template>
  <div id="app">
    <div class="wrapper">
      <header class="header" />
      <router-view />
      <footer class="footer" />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Roboto Light', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

$main-color: #545454;
$second-color: #474747;

.container {
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  max-width: 1920px;
  text-align: center;
}

.wrapper {
  display: flex;
  position: relative;
  min-height: 100vh;
  flex-direction: column;
  background-color: $main-color;
  justify-content: space-between;
}

footer {
  left: 0;
  bottom: 0;
  width: 100%;
  color: #fff;
  height: 270px;
  position: relative;
  background-color: $second-color;
}

header {
  top: 0;
  width: 100%;
  z-index: 1;
  height: 60px;
  background-color: $second-color;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
