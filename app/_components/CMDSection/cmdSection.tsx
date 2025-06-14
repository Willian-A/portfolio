import { ReactElement } from "react";
import { Section } from "../Section";

const logMessages = `
---- SYSTEM STARTUP ----

[23:59:00] BOOT SEQUENCE       Initiating...            START

- System Diagnostics

[23:59:02] CPU                 HyperCore X1              OK
[23:59:03] MEMORY              NanoRAM 64GB              OK
[23:59:04] DISK DRIVES         Quantum Storage 5TB       OK
[23:59:05] GRAPHICS CARD       NeoGraph GX2000           OK
[23:59:06] NEURAL INTERFACE    SynapseLink V4            OK
[23:59:07] OPERATIONAL SYS     CyberOS 2077              OK
[23:59:08] NETWORK             CyberNet                  OK
[23:59:09] FIREWALL            IronWall VX               OK
[23:59:10] VIRUS PROTECT       BitGuard v7.8             OK
[23:59:11] MALWARE SCAN        DarkDefender              OK
[23:59:12] SECURITY            Kernel Panic           ERROR
[23:59:13] DATA BACKUP         HoloCloud                 OK
[23:59:14] DATABASE            DataForge DB              OK
[23:59:15] SERVER              ChromeNode                OK
[23:59:16] WEB SERVER          WarpGate 3.2              OK
[23:59:17] EMAIL SERVER        EtherMail                 OK
[23:59:18] PERMISSIONS         AccessControl v2.1     ERROR
[23:59:19] USER AUTH           BioMetric Pro             OK
[23:59:20] APP SERVICES        AppPulse                  OK
[23:59:21] CLOUD CONNECT       SkyNet                    OK
[23:59:22] SYSTEM LOGS         TraceNet                  OK
[23:59:23] AI SYSTEM           QuantumAI v5              OK
[23:59:24] HOLO INTERFACE      HoloDeck 4D               OK
[23:59:25] POWER MGMT          ElectroDrive v3           OK
[23:59:26] CYBER ENHANCE       Augmentix                 OK
[23:59:27] ENV SENSORS         SensoSphere               OK
[23:59:28] DRONE CONTROL       AeroFleet                 OK
[23:59:29] ENERGY SOURCE       NanoFusion Core           OK
[23:59:30] BIOMETRIC SCAN      SynapticID                OK
[23:59:31] SURVEILLANCE        OmniEye                   OK

- Network Configuration

[23:59:32] IPv4 ADDRESS        192.168.0.1               OK
[23:59:33] IPv6 ADDRESS        fe80::1ff:fe23:4567       OK
[23:59:34] PORTS               80, 443, 22, 8080         OK

- Hardware Logs

[23:59:35] CPU                 HyperCore X1 - 8.6GHz     OK
[23:59:36] MEMORY              NanoRAM 64GB - CyberMem   OK
[23:59:37] DISK DRIVES         Storage 5TB - VaultTech   OK
[23:59:38] GPU                 NeoGraph GX200 - VisaULT  OK
[23:59:39] NEURAL ITF          Synapse V4 - NeuroLink    OK
[23:59:40] NETWORK ADA         CyberNet - NexusLink      OK
[23:59:41] SYSTEM LOGS         Collected                 OK

- System Alerts

[23:59:42] SECURITY            KERNEL PANIC           ERROR
[23:59:43] PERMISSIONS         AccessControl v2.1     ERROR

- Operator Notes

[23:59:44] KERNEL PANIC Security subsystem failed. FAIL
[23:59:46] RECOMMENDATION        Run full diagnostic. WARNING

---- SYSTEM STARTUP INCOMPLETE ----

[23:59:47] BOOT SEQUENCE       Ended with errors       FAIL

Operator Signature: Nyxier
Status: PARTIALLY OPERATIONAL | SECURITY COMPROMISED

"In the neon glow, we thrive. In the shadows, we survive."
`;

export const CMDSection = () => {
  const lines = logMessages.trim().split("\n");

  const result = lines.map((line) => {
    const match = line.match(
      /^\[(\d{2}:\d{2}:\d{2})\]\s+([A-Z\s]+)\s+(.+?)\s+(OK|ERROR|START|FAIL|WARNING)$/
    );
    if (match) {
      return [match[1], match[2].trim(), match[3].trim(), match[4]];
    } else {
      return line.trim();
    }
  });

  const formatLogMessages = (line: string | string[], index: number) => {
    if (typeof line === "object") {
      return (
        <div key={line[0]} className="flex grid grid-cols-6 gap-1 w-full">
          <p className="text-[10px] col-span-3">
            [{line[0]}] {line[1]}
          </p>
          <p className="text-[10px] col-span-2">{line[2]}</p>
          <p className="text-[10px] text-right">{line[3]}</p>
        </div>
      );
    }

    if (line.includes("----")) {
      return (
        <p className="mb-4 font-bold text-[10px]" key={line}>
          {line}
        </p>
      );
    }

    if (line.includes("-")) {
      return (
        <p className="text-[10px] mb-4 font-bold" key={line}>
          {line}
        </p>
      );
    }

    return (
      <p className="mb-4 text-[10px]" key={line + index}>
        {line}
      </p>
    );
  };

  const messages: ReactElement[] = [];

  for (const [index, value] of result.entries()) {
    const formattedMessage = formatLogMessages(value, index);
    messages.push(formattedMessage);
  }

  return (
    <Section
      variant="dark"
      className="hidden md:block h-[400px] overflow-hidden"
      showVersionTag={false}
    >
      <div className="text-text-accent-dark text-[10px] font-tt_interphases_mono">
        {messages}
      </div>
    </Section>
  );
};
