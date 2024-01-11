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
    padding: 0em !important;
  }
	border-left:	3px solid c.$light-gray !important;
	margin:			0 1px 1em !important;
	padding:		.1em 0 .1em 6px !important;
}
</style>
