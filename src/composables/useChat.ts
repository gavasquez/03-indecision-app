import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-messages.interfaces';
import type { YesNoResponse } from '@/interfaces/jes-no.response';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);
  const loading = ref<boolean>(false);

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  const onNewMessage = async (texto: string) => {
    if (texto.length === 0) return;
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: texto,
    });

    // Evaluar si termina con un simbolo de interrogación ?
    if (!texto.endsWith('?')) return;
    loading.value = true;
    await sleep(1.5);

    const { answer, image } = await getHerResponse();
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
    loading.value = false;
  };
  return {
    // Propiedades
    messages,
    loading,
    // Metodos
    onNewMessage,
  };
};
