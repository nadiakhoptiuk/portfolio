import Section from 'components/Section/Section';
import TabsComponent from 'components/Tabs/TabsComponent';

const Reviews = ({ data }) => {
  const { blockTitle, recommendation } = data;

  const expData = recommendation?.reduce(
    (acc, { id, name, positionTitle, quote, date, relationship, source }) => {
      return [
        ...acc,
        {
          id: id,
          tabName: name,
          position: positionTitle,
          description: quote,
          date: date,
          blueText: relationship,
          source,
        },
      ];
    },
    [],
  );

  return (
    <Section h2={blockTitle}>
      <TabsComponent data={expData} />
    </Section>
  );
};

export default Reviews;
