"use client";

import Link from "next/link";
import { useRef } from "react";
import { toast } from "sonner";

import { Button } from "@/components/shared/Button/Button";
import { Container } from "@/components/shared/Container/Container";
import { Section } from "@/components/shared/Section/Section";
import { Text } from "@/components/shared/Text/Text";

import styles from "./Contact.module.scss";

export const Contact = () => {
  const ref = useRef<HTMLInputElement>(null);

  const copyToClipBoard = () => {
    const copyText = ref.current;

    if (!copyText) return;

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    toast.success("Email was copied");
  };

  return (
    <main className={styles.main}>
      <Section>
        <Container className={styles.wrap}>
          <div>
            <Text title>Contacts</Text>
            <Text>My contact information</Text>
          </div>
          <div>
            <Link href={"mailto:mironbrinkovskiy@gmail.com"}>
              mironbrinkovskiy@gmail.com
            </Link>
            <Text>E-mail</Text>
          </div>
          <Button
            className="bg-transparent border border-brightGray mt-8"
            onClick={copyToClipBoard}
          >
            Copy email
          </Button>
        </Container>
      </Section>
      <input
        type="text"
        defaultValue={"mironbrinkovskiy@gmail.com"}
        ref={ref}
        className={"hidden"}
      />
    </main>
  );
};
