-- ==========================================================================
-- NEW SITARA — SUPABASE POSTGRESQL DATABASE SCHEMA
-- Execute this SQL script in your Supabase SQL Editor to initialize cloud DB
-- ==========================================================================

-- 1. APPAREL CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  image TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT REFERENCES public.categories(id) ON DELETE SET NULL,
  category_name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  tag TEXT,
  image_front TEXT NOT NULL,
  image_back TEXT,
  sizes JSONB NOT NULL DEFAULT '["S", "M", "L", "XL"]'::jsonb,
  specs TEXT,
  description TEXT NOT NULL,
  in_stock BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. ORDERS TABLE WITH TRACKING
CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY, -- e.g. NS-TRK-74829
  customer_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  street_address TEXT NOT NULL,
  apartment TEXT,
  city TEXT NOT NULL,
  state TEXT,
  postal_code TEXT NOT NULL,
  country TEXT NOT NULL,
  items JSONB NOT NULL, -- Array of ordered items with sizes and quantities
  subtotal NUMERIC(10, 2) NOT NULL,
  discount NUMERIC(10, 2) DEFAULT 0,
  shipping NUMERIC(10, 2) DEFAULT 0,
  total NUMERIC(10, 2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'Pending', -- Pending, Processing, Shipped, Delivered, Cancelled
  payment_method TEXT NOT NULL, -- Card, COD, Bank Transfer, WhatsApp
  courier_name TEXT, -- e.g. DHL Express, FedEx, TCS
  courier_tracking_ref TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. PROMOTION CODES TABLE
CREATE TABLE IF NOT EXISTS public.promos (
  code TEXT PRIMARY KEY,
  discount INTEGER NOT NULL,
  active BOOLEAN DEFAULT TRUE,
  usage_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (Allow Public Read/Write for Client App)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.promos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Allow public all categories" ON public.categories FOR ALL USING (true);

CREATE POLICY "Allow public read products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Allow public all products" ON public.products FOR ALL USING (true);

CREATE POLICY "Allow public all orders" ON public.orders FOR ALL USING (true);
CREATE POLICY "Allow public all promos" ON public.promos FOR ALL USING (true);

-- Insert Default Promo
INSERT INTO public.promos (code, discount, active, usage_count)
VALUES ('SITARA15', 15, true, 0)
ON CONFLICT (code) DO NOTHING;
