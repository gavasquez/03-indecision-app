<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image"
      />
      <!-- Mensajes Cargando -->
      <div v-if="loading" class="flex">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
          <span class="capitalize">Cargando...</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-messages.interfaces';
import ChatBubble from './ChatBubble.vue';

interface Props {
  messages: ChatMessage[];
  loading: boolean;
}

const { messages, loading } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);
watch(messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>
