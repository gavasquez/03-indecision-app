<template>
  <div class="bg-gray-700 h-screen flex flex-col mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :loading="loading" :messages="messages" />

    <!-- MessageBox -->
    <MessageBox @send-message="onNewMessage($event)" />
  </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '../composables/useChat';

const { messages, onNewMessage, loading } = useChat();
</script>
