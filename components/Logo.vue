<template>
  <div class="logo-container">
    <svg id="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
     <defs>
      <style>.cls-1{fill:#ecb251;}.cls-2{fill:#526aa9;}.cls-3{fill:#cd5655;}.cls-4{fill:#08968f;}.cls-5{fill:#fff;}</style>
    </defs>
    <title>logo-chaos</title>
    <g id="logo">
        <rect id="base-yellow" class="cls-1" width="200" height="200"/>
        <rect id="back-blue" class="cls-2" x="100" y="116.42" width="100" height="83.58"/>
        <rect id="side-red" class="cls-3" x="155.7" y="128.22" width="44.3" height="39.69"/>
        <rect id="back-red" class="cls-3" width="114.55" height="79.96"/>
        <rect id="core-green" class="cls-4" x="41.55" y="50.92" width="90" height="90"/>
        <rect id="top-yellow" class="cls-1" x="32.23" y="29.55" width="48.7" height="57.47"/>
        <rect id="top-white" class="cls-5" x="69.86" y="128.22" width="44.69" height="44.69"/>
      </g>
    </svg>
  </div>
</template>
<style scoped>
.logo-container {
  padding: 1rem;
}
@keyframes horizontal {
    0% { transform:translateX(-1px); }
  100% { transform:translateX( 1px); }
}
@keyframes vertical {
    0% { transform:translateY(-2px); }
  100% { transform:translateY( 2px); }
}
@keyframes diagonalLeft {
  0% {
    transform:translate(-2px, -2px);
  }
  100% {
    transform:translate(0px, 0px);
  }
}
#core-green {
  animation: vertical 1s ease-in-out infinite alternate;
}
#side-red,
#top-white {
  animation: horizontal 1s ease-in-out infinite alternate;
}
#back-red {
  animation: diagonalLeft 1s ease-in-out infinite alternate;
}
</style>
