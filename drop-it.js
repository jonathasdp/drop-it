function dropElements(arr, func) {
  // Inicia a contagem.
  let count = 1;

  // Copia o array do parâmetro fornecido para que não seja alterado e seja possível iterar sobre ele.
  let result = arr.slice();

  //  Enquanto a contagem for menor que o tamanho do array e a callback retorne falso para este item.
  while (count <= arr.length && !func(arr[count - 1])) {

    // Remove o item da iteração.
    result.shift();

    // Incrementa a contagem.
    count++;
  }

  // Retorna o array somente com os itens que sobraram a partir da primeira callback verdadeira.
  return result;
}
