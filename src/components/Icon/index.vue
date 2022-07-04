<template>
  <span class="icon-comp">
    <i
      v-if="name.indexOf('el-icon') !== -1"
      :class="name"
      :style="{ color, 'font-size': size + 'px' }"
    ></i>
    <span v-if="type === 'icon-park'">
      <component
        :theme="theme"
        :size="size"
        :strokeWidth="strokeWidth"
        :is="name"
        :fill="color"
        class="icon"
      />
    </span>
    <span v-if="name.indexOf('icon-park') !== -1">
      <component
        :theme="theme"
        :size="size"
        :strokeWidth="strokeWidth"
        :is="getRealIconName('icon-park-', name)"
        :fill="color"
        class="icon"
      />
    </span>

    <el-icon v-if="type === 'el-icon'" :style="{ color, 'font-size': size + 'px' }">
      <component :is="name" />
    </el-icon>
    <svg-icon v-if="type === 'svg-icon'" :name="name" />

    <svg-icon v-if="name.indexOf('svg-') !== -1" :name="getRealIconName('svg-', name)" />
  </span>
</template>

<script setup name="Icon">
  defineProps({
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '14',
    },
    color: {
      type: String,
      default: '#333',
    },
    theme: {
      type: String,
      default: 'outline',
    },
    strokeWidth: {
      type: String,
      default: '3',
    },
    name: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: 'icon',
    },
  });

  const getRealIconName = (prefix, name) => {
    return name.slice(prefix.length);
  };
</script>
<style lang="scss" scoped></style>
