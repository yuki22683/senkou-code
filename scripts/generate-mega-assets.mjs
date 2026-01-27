import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const cookie = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..kqbGbm6FauVgQBqU.IR4c0qI9zXHkHptyP6tP0eCscJYuI3DKJoumNNaf1-eYXQupi45Y5swhL34CgvUuOsvWVgIviLSbZlrnFmREmfAXXyq4kZPOxp9lUJWTz0cs89Q4c8XwCQXkjYb4KMjrP4UupQ3f_-o83ksiXHqjzPFZtp6MFZ40QH88u7Xp-Pn0tLG6pbct1fbUHHmaU6wEdPdzWKCZoXiuuj-M7UtOatV5Aq2TUH7KdkVYtSSjhs4UGYDjtYZbHSxi1xdL_iPB9hkk0u5PnFpxCV0SRe2IZ1R5qS94zVo2scswSs65XeDHBc88Gvi4M6Z4GCaY-yH11qNzk4-y2w0SMBNI6d7NIQjKokft8sMUnt9SxPs7bDvM4wH_2WE4dKWZcDmdaV-kc5vf-4T8v_K3EAFKH9gTaAUozJ1V8F9jNsKHb0eMREm8cXi9zyf6zXE4mjoBw5_C1IEcvb9f6CZs0AaGlvbj5gfLfDx85Qo0MQKWU9cyxShteQN5AWgd8df_10Wuh5zfkkcRy60aHHNVxnF_nP43NPisx3mudOggWUwSpCIrf0glRttOWIPCQlCrVARv9l3Iv3u1NNDgvyCFzIOuPDXvk6aNo6AbAY0akj1k_0tEBsfbB03Oz8WuvkK1fAmVXjFVa3tps9I0oqkwUJRJNmZLf_TKkzf7MvKo3dnKDdvc_uBmRDvlF_tfispNdWcdAPe4gCNvdZxStAFYuoc8wg5G6x0ipmnxgSVQ7_6B6lgKzdXsS74MunPaucKvkXEiTnVgll2n8s5mATqvQa95wdsvMp6VWYFTTIUW2Zlp5EHbyjy5wvHbI-CXhOWAlVlro5o4gPt-o1n_7bfJEI4byU_pehIPORYYoDzEOdUioCeq5j3h2-L2K6z2CNY-oW-VGLDAGm7V3xJeD39IoY8N6w6OIKQwQvyWz9Ybmz7MfLq14zrJ3sdStAq0XUoAg6TX9iiNO_A9BPKOdje87nwWIMJF7w.QkgvDHgp26SMB9xGa2Qg2A";
const outputDir = "public/illustrations/common";

const assets = [
  { name: 'binary_code.png', prompt: "Glossy 3D zeros and ones floating in the air, representing binary code, clean minimalist style, white background" },
  { name: 'modulo_percent.png', prompt: "A bright 3D percentage symbol %, representing modulo operation, clean minimalist style, white background" },
  { name: 'shield_private.png', prompt: "A metallic 3D shield with a lock icon, representing private access and security, clean minimalist style, white background" },
  { name: 'trash_memory.png', prompt: "A sleek 3D recycling bin with floating data bits, representing memory cleanup, clean minimalist style, white background" },
  { name: 'timer_clock.png', prompt: "A modern 3D stopwatch with a glowing digital display, representing timeouts and delays, clean minimalist style, white background" },
  { name: 'magnifying_data.png', prompt: "A 3D magnifying glass focusing on a small glowing data cube, representing filtering and searching, clean minimalist style, white background" },
  { name: 'hierarchy_tree.png', prompt: "A 3D organizational tree structure with colorful nodes, representing class inheritance, clean minimalist style, white background" },
  { name: 'modular_blocks.png', prompt: "Colorful 3D blocks fitting together like Lego, representing modular programming, clean minimalist style, white background" },
  { name: 'traffic_light.png', prompt: "A stylized 3D traffic light with a green light glowing, representing control flow, clean minimalist style, white background" },
  { name: 'toolbox_static.png', prompt: "A bright 3D open toolbox with various tools, representing static utility methods, clean minimalist style, white background" },
  { name: 'key_mutex.png', prompt: "A 3D golden key and a heavy silver padlock, representing mutex and synchronization, clean minimalist style, white background" },
  { name: 'envelope_message.png', prompt: "A 3D floating envelope with a blue glowing edge, representing message passing, clean minimalist style, white background" },
  { name: 'dna_generics.png', prompt: "A stylized 3D DNA double helix made of code symbols, representing generics and types, clean minimalist style, white background" },
  { name: 'compass_path.png', prompt: "A 3D modern compass pointing forward, representing file paths and routing, clean minimalist style, white background" },
  { name: 'cloud_async.png', prompt: "A fluffy 3D white cloud with digital data lines, representing async and network, clean minimalist style, white background" },
  { name: 'battery_state.png', prompt: "A 3D battery icon with a glowing green level, representing state and data storage, clean minimalist style, white background" },
  { name: 'light_bulb_hint.png', prompt: "A bright 3D yellow lightbulb glowing, representing a concept or tip, clean minimalist style, white background" },
  { name: 'engine_speed.png', prompt: "A sleek 3D turbine engine, representing performance and optimization, clean minimalist style, white background" },
  { name: 'book_reference.png', prompt: "A thick 3D open book with a bookmark, representing documentation and reference, clean minimalist style, white background" },
  { name: 'ruler_measure.png', prompt: "A 3D wooden ruler and a measuring tape, representing size and length, clean minimalist style, white background" },
];

for (const asset of assets) {
  const targetPath = path.join(outputDir, asset.name);
  if (fs.existsSync(targetPath)) {
    console.log(`Skipping: ${asset.name}`);
    continue;
  }

  console.log(`Generating: ${asset.name}...`);
  try {
    const cmd = `imagefx --cookie "${cookie}" --prompt "${asset.prompt}" --count 1 --dir "${outputDir}" --ratio IMAGE_ASPECT_RATIO_SQUARE`;
    execSync(cmd);
    
    const files = fs.readdirSync(outputDir).filter(f => f.startsWith('image-') && f.endsWith('.png'));
    if (files.length > 0) {
      const newest = files.sort().reverse()[0];
      fs.renameSync(path.join(outputDir, newest), targetPath);
      console.log(`Saved: ${asset.name}`);
    }
  } catch (err) {
    console.error(`Failed ${asset.name}: ${err.message}`);
  }
}
