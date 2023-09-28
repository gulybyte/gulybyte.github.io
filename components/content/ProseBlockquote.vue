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
    padding-bottom: 0em !important;
  }
	border-left:	3px solid c.$light-gray !important;
	margin:			1em 1px !important;
	padding:		.1em 0 .1em 6px !important;
}
</style>
