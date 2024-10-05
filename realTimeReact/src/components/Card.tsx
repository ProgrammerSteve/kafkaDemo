import { FrameOctagon, Animator, Animated, Text } from "@arwes/react";

interface Props {
  value: number;
}
export default function Card({ value }: Props) {
  return (
    <div style={{ position: "relative", width: 300, height: 300,display:"grid",placeItems:"center" }}>
      <FrameOctagon
        style={
          {
            "--arwes-frames-line-color": "#20DFDF", // Line color
            "--arwes-frames-bg-color": "hsl(180deg 75% 50% / 10%)", // Background color
          } as React.CSSProperties // Cast to CSSProperties to avoid TypeScript errors
        }
        // animated={false}
      />
      <div style={{ position: "relative", display:"grid",placeItems:"center" }}>
        <Animator>
          <Animated as="article" className=" flex flex-col justify-center items-center"  animated={["fade"]}>
            <Animator>
              <Animated
                as="h1"
                className="text-primary-4 text-xl"
                animated={["fade", ["x", 20, 0]]}
              >
                YOUR VALUE
              </Animated>
            </Animator>
            <Animator>
              <Animated
                as="p"
                className="font-body text-secondary-4 text-4xl"
                animated={["fade", ["x", 20, 0]]}
              >
                <Text >{value}</Text>
              </Animated>
            </Animator>
          </Animated>
        </Animator>
      </div>
    </div>
  );
}
