import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const cookie = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..kqbGbm6FauVgQBqU.IR4c0qI9zXHkHptyP6tP0eCscJYuI3DKJoumNNaf1-eYXQupi45Y5swhL34CgvUuOsvWVgIviLSbZlrnFmREmfAXXyq4kZPOxp9lUJWTz0cs89Q4c8XwCQXkjYb4KMjrP4UupQ3f_-o83ksiXHqjzPFZtp6MFZ40QH88u7Xp-Pn0tLG6pbct1fbUHHmaU6wEdPdzWKCZoXiuuj-M7UtOatV5Aq2TUH7KdkVYtSSjhs4UGYDjtYZbHSxi1xdL_iPB9hkk0u5PnFpxCV0SRe2IZ1R5qS94zVo2scswSs65XeDHBc88Gvi4M6Z4GCaY-yH11qNzk4-y2w0SMBNI6d7NIQjKokft8sMUnt9SxPs7bDvM4wH_2WE4dKWZcDmdaV-kc5vf-4T8v_K3EAFKH9gTaAUozJ1V8F9jNsKHb0eMREm8cXi9zyf6zXE4mjoBw5_C1IEcvb9f6CZs0AaGlvbj5gfLfDx85Qo0MQKWU9cyxShteQN5AWgd8df_10Wuh5zfkkcRy60aHHNVxnF_nP43NPisx3mudOggWUwSpCIrf0glRttOWIPCQlCrVARv9l3Iv3u1NNDgvyCFzIOuPDXvk6aNo6AbAY0akj1k_0tEBsfbB03Oz8WuvkK1fAmVXjFVa3tps9I0oqkwUJRJNmZLf_TKkzf7MvKo3dnKDdvc_uBmRDvlF_tfispNdWcdAPe4gCNvdZxStAFYuoc8wg5G6x0ipmnxgSVQ7_6B6lgKzdXsS74MunPaucKvkXEiTnVgll2n8s5mATqvQa95wdsvMp6VWYFTTIUW2Zlp5EHbyjy5wvHbI-CXhOWAlVlro5o4gPt-o1n_7bfJEI4byU_pehIPORYYoDzEOdUioCeq5j3h2-L2K6z2CNY-oW-VGLDAGm7V3xJeD39IoY8N6w6OIKQwQvyWz9Ybmz7MfLq14zrJ3sdStAq0XUoAg6TX9iiNO_A9BPKOdje87nwWIMJF7w.QkgvDHgp26SMB9xGa2Qg2A";
const outputDir = "public/illustrations/common";

const assets = [
  { name: 'python_snake.png', prompt: "A cute, stylized 3D green and yellow snake, representing the Python programming language, clean minimalist style, white background" },
  { name: 'java_coffee.png', prompt: "A steaming 3D cup of coffee with a blue saucer, representing the Java programming language, clean minimalist style, white background" },
  { name: 'rust_gear.png', prompt: "A rugged 3D rusty metallic gear, representing the Rust programming language and memory safety, clean minimalist style, white background" },
  { name: 'c_sharp_logo.png', prompt: "A sleek 3D silver '#' symbol, representing the C# programming language, clean minimalist style, white background" },
  { name: 'go_gopher_style.png', prompt: "A simple 3D cute stylized creature like a gopher, representing the Go programming language, clean minimalist style, white background" },
  { name: 'swift_bird.png', prompt: "A sleek 3D stylized orange bird in flight, representing the Swift programming language, clean minimalist style, white background" },
  { name: 'js_yellow.png', prompt: "A glossy 3D yellow cube with 'JS' written on it, representing JavaScript, clean minimalist style, white background" },
  { name: 'ts_blue.png', prompt: "A glossy 3D blue cube with 'TS' written on it, representing TypeScript, clean minimalist style, white background" },
];

for (const asset of assets) {
  const targetPath = path.join(outputDir, asset.name);
  if (fs.existsSync(targetPath)) continue;
  try {
    const cmd = `imagefx --cookie "${cookie}" --prompt "${asset.prompt}" --count 1 --dir "${outputDir}" --ratio IMAGE_ASPECT_RATIO_SQUARE`;
    execSync(cmd);
    const files = fs.readdirSync(outputDir).filter(f => f.startsWith('image-') && f.endsWith('.png'));
    if (files.length > 0) {
      const newest = files.sort().reverse()[0];
      fs.renameSync(path.join(outputDir, newest), targetPath);
    }
  } catch (err) {}
}
