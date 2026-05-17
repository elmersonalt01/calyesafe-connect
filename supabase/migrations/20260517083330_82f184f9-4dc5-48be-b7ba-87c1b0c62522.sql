
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE OR REPLACE FUNCTION public.handle_incident_resolved()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF NEW.status = 'resolved' AND OLD.status <> 'resolved' THEN
    NEW.resolved_at = now();
  END IF;
  RETURN NEW;
END;
$$;
