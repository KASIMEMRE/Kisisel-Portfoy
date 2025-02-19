#React + TypeScript + Vite
Bu şablon, React'i Vite ile çalıştırmak için minimal bir kurulum sağlar ve HMR (Hot Module Replacement) ile bazı ESLint kurallarını içerir.

Şu anda iki resmi eklenti mevcuttur:

@vitejs/plugin-react, Hızlı Yenileme (Fast Refresh) için Babel kullanır.
@vitejs/plugin-react-swc ise Hızlı Yenileme için SWC kullanır.
ESLint yapılandırmasını genişletme
Eğer bir üretim uygulaması geliştiriyorsanız, yapılandırmayı güncelleyerek tür (type) farkındalığı olan lint kurallarını etkinleştirmenizi öneririz:

Üst düzey parserOptions ayarlarını şu şekilde yapılandırın:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

-tseslint.configs.recommended ayarını tseslint.configs.recommendedTypeChecked veya tseslint.configs.strictTypeChecked ile değiştirin.
-İsteğe bağlı olarak ...tseslint.configs.stylisticTypeChecked ekleyin.
-eslint-plugin-react eklentisini yükleyin ve yapılandırmayı güncelleyin:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
