<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import selectionItem from "@/components/News/selectionItem.vue"
import { getLink, getSymbolColor, getSymbolIcon, setDate, tree } from "@/views/News/NewsTree";

// Newsのうち，Updatesに表示する件数
const showCounts = 3

</script>

<template>
  <pageTitle main="最近の更新"/>
  <div class="q-px-lg">
    <q-timeline color="secondary">
      <template v-for="(page, index) in tree.slice(0, showCounts)" :key="index">
        <selectionItem
          :icon="getSymbolIcon(page.type)"
          :color="getSymbolColor(page.type)"
          :date="setDate(page.year, page.month, page.date)"
          :description="page.description"
          :link="getLink(page.year, page.link)"/>
      </template>
    </q-timeline>
  </div>
</template>