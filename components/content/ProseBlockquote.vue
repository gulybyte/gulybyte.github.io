<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style lang="scss">
@use 'assets/colors' as c;

blockquote {
  p {
    color: c.$light-gray;
  }
	border-left:	3px solid c.$light-gray !important;
	margin:			1.5em 10px !important;
	padding:		.1em 0 .1em 30px !important;
}
</style>
