<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import MemberCore from '@/components/Member/memberCore.vue';
import studentDetail from '@/components/Member/studentDetail.vue';
import {staffs, students} from '@/views/Member/MemberTree';
</script>

<template>
  <pageTitle main="スタッフ"/>
  <q-list v-for="staff in staffs">
    <q-item v-if="staff.link" clickable :href="staff.link" class="q-pa-md">
      <MemberCore
        :name="staff.firstName+staff.lastName"
        :img-path="staff.figPath"
        :grade="staff.grade"
      />
      <q-item-section side>
        <q-icon name="keyboard_arrow_right" size="24px"/>
      </q-item-section>
    </q-item>

    <q-item v-else class="q-pa-md">
      <MemberCore
        :name="staff.firstName+staff.lastName"
        :img-path="staff.figPath"
        :grade="staff.grade"
        :address="staff.address"
      />
    </q-item>

  </q-list>
    
  <pageTitle main="学生"/>
  <q-list v-for="student in students">
    <q-list class="rounded-borders">
      <q-expansion-item>
        <!-- 画像部分 -->
        <template v-slot:header>
          <MemberCore
            :name="student.firstName+student.lastName"
            :img-path="student.figPath"
            :grade="student.grade"
            :keywards="student.keywards"
          />
        </template>

        <!-- 下の拡張部分 -->
        <studentDetail
          :keywards="student.keywards"
          :from="student.from"
          :hobby="student.hobby"
          :journal-keys="student.journalKeys"
        />
      </q-expansion-item>

      <q-separator spaced/>
    </q-list>
  </q-list>
</template>

<style lang="scss" scoped>
.Alumni{
  width: 100%;
  margin-top: 5%;
}
</style>