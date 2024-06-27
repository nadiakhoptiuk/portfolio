import Section from 'components/Section/Section';
import TabsComponent from 'components/Tabs/TabsComponent';

const Experience = ({ data }) => {
  const { blockTitle, blockAnchorId, workPosition } = data;

  const expData = workPosition?.reduce(
    (
      acc,
      {
        id,
        companyTitle,
        positionTitle,
        requirements,
        duration,
        companyPlacement,
      },
    ) => {
      return [
        ...acc,
        {
          id: id,
          tabName: companyTitle,
          position: positionTitle,
          description: requirements,
          date: duration,
          blueText: companyPlacement,
        },
      ];
    },
    [],
  );

  return (
    <Section
      h2={blockTitle}
      id={blockAnchorId}
      className="md:!pt-[64px] xl:!pt-[100px] smOnly:!pt-[54px]"
    >
      <TabsComponent data={expData} />
    </Section>
  );
};

export default Experience;
