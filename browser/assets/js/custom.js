export function mergeColummnsData(root, uniqueGroupedData) {
  Object.entries(uniqueGroupedData).forEach(([key, values]) => {
    values.forEach((element) => {
      const selector = `.${key}_${element}`;
      const nodes = root.querySelectorAll(selector);
      const count = nodes.length;

      if (count === 0) return;

      const first = nodes[0];
      first.setAttribute("rowspan", count);
      for (let i = 1; i < count; i++) {
        nodes[i].remove();
      }
    });
  });
}