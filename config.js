// ============================================================
// CONFIGURACIÓN — completa estos 3 valores antes de usar la app
// ============================================================

// 1. En Supabase: Project Settings > API > Project URL
const SUPABASE_URL = "PEGA_AQUI_TU_SUPABASE_URL";

// 2. En Supabase: Project Settings > API > Project API keys > "anon public"
const SUPABASE_ANON_KEY = "PEGA_AQUI_TU_ANON_KEY";

// 3. Contraseña para entrar al panel de aprobación (admin.html).
//    Cámbiala por una que solo tú/tus supervisores conozcan.
//    Nota: es una protección básica en el navegador, no un login real.
const ADMIN_PASSWORD = "CAMBIA_ESTA_CLAVE";

// No edites debajo de esta línea
window.APP_CONFIG = { SUPABASE_URL, SUPABASE_ANON_KEY, ADMIN_PASSWORD };
