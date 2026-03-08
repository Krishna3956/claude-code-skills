import { DISPOSABLE_DOMAINS } from "./disposable-domains";

interface ValidationResult {
  valid: boolean;
  error?: string;
  suggestion?: string;
}

const FORMAT_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TYPO_MAP: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "gnail.com": "gmail.com",
  "gmali.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.cm": "gmail.com",
  "gmail.om": "gmail.com",
  "gmaul.com": "gmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yahoo.co": "yahoo.com",
  "yahoo.con": "yahoo.com",
  "yhaoo.com": "yahoo.com",
  "hotmal.com": "hotmail.com",
  "hotmial.com": "hotmail.com",
  "hotmil.com": "hotmail.com",
  "hotmail.co": "hotmail.com",
  "hotmail.con": "hotmail.com",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "outlook.co": "outlook.com",
  "outlook.con": "outlook.com",
  "protonmal.com": "protonmail.com",
  "protonmail.co": "protonmail.com",
  "iclod.com": "icloud.com",
  "icoud.com": "icloud.com",
  "icloud.co": "icloud.com",
};

const FAKE_LOCAL_PARTS = new Set([
  "test",
  "fake",
  "asdf",
  "qwerty",
  "temp",
  "nope",
  "none",
  "null",
  "void",
  "spam",
  "trash",
  "junk",
  "abc",
  "xyz",
  "aaa",
  "bbb",
  "xxx",
  "zzz",
  "admin",
  "root",
  "user",
  "example",
  "sample",
  "demo",
  "no",
  "na",
  "noemail",
  "noreply",
  "nobody",
]);

const FAKE_COMBOS = new Set([
  "test@test.com",
  "fake@fake.com",
  "test@gmail.com",
  "fake@gmail.com",
  "asdf@asdf.com",
  "asdf@gmail.com",
  "a@a.com",
  "a@b.com",
  "abc@abc.com",
  "abc@gmail.com",
  "xyz@xyz.com",
  "xyz@gmail.com",
  "email@email.com",
  "user@user.com",
  "me@me.com",
  "no@no.com",
  "noemail@gmail.com",
  "noreply@gmail.com",
]);

export function validateEmail(email: string): ValidationResult {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed) {
    return { valid: false, error: "Please enter your email" };
  }

  if (!FORMAT_RE.test(trimmed)) {
    return { valid: false, error: "Please enter a valid email" };
  }

  const [localPart, domain] = trimmed.split("@");

  if (localPart.length <= 1) {
    return { valid: false, error: "Please enter your full email address" };
  }

  if (FAKE_COMBOS.has(trimmed)) {
    return { valid: false, error: "Please use your real email address" };
  }

  if (FAKE_LOCAL_PARTS.has(localPart)) {
    return { valid: false, error: "Please use your real email address" };
  }

  if (TYPO_MAP[domain]) {
    return {
      valid: false,
      error: `Did you mean ${localPart}@${TYPO_MAP[domain]}?`,
      suggestion: `${localPart}@${TYPO_MAP[domain]}`,
    };
  }

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      valid: false,
      error: "Please use a non-temporary email address",
    };
  }

  return { valid: true };
}
