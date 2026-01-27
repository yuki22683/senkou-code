import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const cookie = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..kqbGbm6FauVgQBqU.IR4c0qI9zXHkHptyP6tP0eCscJYuI3DKJoumNNaf1-eYXQupi45Y5swhL34CgvUuOsvWVgIviLSbZlrnFmREmfAXXyq4kZPOxp9lUJWTz0cs89Q4c8XwCQXkjYb4KMjrP4UupQ3f_-o83ksiXHqjzPFZtp6MFZ40QH88u7Xp-Pn0tLG6pbct1fbUHHmaU6wEdPdzWKCZoXiuuj-M7UtOatV5Aq2TUH7KdkVYtSSjhs4UGYDjtYZbHSxi1xdL_iPB9hkk0u5PnFpxCV0SRe2IZ1R5qS94zVo2scswSs65XeDHBc88Gvi4M6Z4GCaY-yH11qNzk4-y2w0SMBNI6d7NIQjKokft8sMUnt9SxPs7bDvM4wH_2WE4dKWZcDmdaV-kc5vf-4T8v_K3EAFKH9gTaAUozJ1V8F9jNsKHb0eMREm8cXi9zyf6zXE4mjoBw5_C1IEcvb9f6CZs0AaGlvbj5gfLfDx85Qo0MQKWU9cyxShteQN5AWgd8df_10Wuh5zfkkcRy60aHHNVxnF_nP43NPisx3mudOggWUwSpCIrf0glRttOWIPCQlCrVARv9l3Iv3u1NNDgvyCFzIOuPDXvk6aNo6AbAY0akj1k_0tEBsfbB03Oz8WuvkK1fAmVXjFVa3tps9I0oqkwUJRJNmZLf_TKkzf7MvKo3dnKDdvc_uBmRDvlF_tfispNdWcdAPe4gCNvdZxStAFYuoc8wg5G6x0ipmnxgSVQ7_6B6lgKzdXsS74MunPaucKvkXEiTnVgll2n8s5mATqvQa95wdsvMp6VWYFTTIUW2Zlp5EHbyjy5wvHbI-CXhOWAlVlro5o4gPt-o1n_7bfJEI4byU_pehIPORYYoDzEOdUioCeq5j3h2-L2K6z2CNY-oW-VGLDAGm7V3xJeD39IoY8N6w6OIKQwQvyWz9Ybmz7MfLq14zrJ3sdStAq0XUoAg6TX9iiNO_A9BPKOdje87nwWIMJF7w.QkgvDHgp26SMB9xGa2Qg2A";
const outputDir = "public/illustrations/common";

const assets = [
  { name: 'sorting_cards.png', prompt: "Neat 3D cards with symbols being arranged in order, representing sorting, clean minimalist style, white background" },
  { name: 'hourglass_waiting.png', prompt: "A glossy 3D hourglass with glowing sand, representing waiting or async tasks, clean minimalist style, white background" },
  { name: 'safety_net.png', prompt: "A glowing 3D safety net, representing error handling and safety, clean minimalist style, white background" },
  { name: 'blueprint.png', prompt: "A 3D blueprint or architect plan, representing class or structure definition, clean minimalist style, white background" },
  { name: 'hose_bucket.png', prompt: "A 3D isometric blue hose pouring data into a colorful bucket, representing redirection, clean minimalist style, white background" },
  { name: 'split_road.png', prompt: "A 3D stylized road splitting into two directions, representing conditional branching, clean minimalist style, white background" },
  { name: 'circular_arrow.png', prompt: "A glossy 3D circular arrow, representing loops and repetition, clean minimalist style, white background" },
  { name: 'stack_boxes.png', prompt: "A neat 3D stack of colorful boxes, representing a data stack, clean minimalist style, white background" },
  { name: 'chain_links.png', prompt: "Two glossy 3D chain links connecting, representing joining or linking, clean minimalist style, white background" },
  { name: 'abacus.png', prompt: "A simple 3D abacus with colorful beads, representing calculation and arithmetic, clean minimalist style, white background" },
  { name: 'robot_greet.png', prompt: "A friendly 3D robot character waving, representing a function call or greeting, clean minimalist style, white background" },
  { name: 'dictionary_book.png', prompt: "A 3D open book with index tabs, representing a dictionary or map, clean minimalist style, white background" },
  { name: 'file_folder.png', prompt: "A 3D open folder with papers inside, representing file input and output, clean minimalist style, white background" },
  { name: 'address_pointer.png', prompt: "A 3D stylized hand pointing to a specific map location pin, representing a memory pointer, clean minimalist style, white background" },
];

for (const asset of assets) {
  const targetPath = path.join(outputDir, asset.name);
  if (fs.existsSync(targetPath)) {
    console.log(`Skipping existing: ${asset.name}`);
    continue;
  }

  console.log(`Generating: ${asset.name}...`);
  try {
    const cmd = `imagefx --cookie "${cookie}" --prompt "${asset.prompt}" --count 1 --dir "${outputDir}" --ratio IMAGE_ASPECT_RATIO_SQUARE`;
    execSync(cmd);
    
    // Find the new image file
    const files = fs.readdirSync(outputDir).filter(f => f.startsWith('image-') && f.endsWith('.png'));
    if (files.length > 0) {
      const newest = files.sort().reverse()[0];
      fs.renameSync(path.join(outputDir, newest), targetPath);
      console.log(`Saved: ${asset.name}`);
    }
  } catch (err) {
    console.error(`Failed to generate ${asset.name}: ${err.message}`);
  }
}
