import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";

export const AccordionExample = () => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>About the artist</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          placerat ultrices pretium. Fusce porttitor id elit nec tempus.
          Maecenas a augue efficitur, pellentesque mauris ut, lobortis tellus.
          Nullam rutrum ligula sapien, sit amet mattis ante tristique et. Sed in
          justo ullamcorper, gravida velit sit amet, facilisis urna. Etiam
          lacinia ante in sem laoreet varius. Aliquam at malesuada velit.
          Quisque tempor blandit mi. Suspendisse tristique ac arcu eget
          scelerisque. Nunc et lacus eu mi scelerisque venenatis. Curabitur sit
          amet ornare orci. Duis eros enim, finibus vel commodo a, varius in
          dui. Vestibulum aliquam iaculis congue. Duis aliquam aliquam nibh, in
          lacinia nunc. Donec laoreet velit id sem congue sagittis.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is the album theme?</AccordionTrigger>
        <AccordionContent>
          Aliquam in dictum velit. Nulla in dapibus erat. Etiam elementum auctor
          diam non imperdiet. Quisque dapibus, dui in placerat sagittis, tortor
          metus blandit diam, sit amet luctus eros ligula et neque. Aliquam
          congue nisl eget pretium eleifend. Aenean tincidunt tempor nulla sit
          amet tincidunt. Praesent dignissim sed turpis at efficitur.
          Pellentesque in ligula a tortor eleifend mollis. In sapien turpis,
          pretium non erat eget, volutpat vehicula turpis. Etiam mattis euismod
          sollicitudin. Fusce sollicitudin finibus sapien eget feugiat. Fusce
          bibendum scelerisque nisl in aliquet. Donec ac dictum eros. In ante
          nibh, interdum sit amet cursus ut, consectetur vitae quam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Who produced?</AccordionTrigger>
        <AccordionContent>
          Ut eu semper nibh. Morbi non ipsum aliquam, vehicula diam at,
          convallis nunc. Phasellus ornare ultrices libero eget feugiat. Nunc
          mollis nisi id nunc auctor, eget vulputate sapien malesuada.
          Suspendisse scelerisque ac ligula in mattis. Fusce nisl sem, sagittis
          eget efficitur vel, malesuada et massa. Duis rhoncus malesuada
          vulputate. Fusce suscipit viverra metus, sed sollicitudin ante viverra
          in. Vivamus iaculis justo dolor, sit amet lacinia neque dignissim non.
          Duis metus dolor, pellentesque id nisl eget, accumsan rutrum orci.
          Praesent ut mauris a nibh finibus laoreet vel sit amet ante. Fusce
          suscipit neque vel aliquet tempus. Maecenas semper efficitur tellus,
          et blandit massa consequat non.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
