import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {styles} from '../../styles';
import {TextStyles} from '../../types';

type ListItemProps = {
  icon: any;
  title: string;
  description: string;
  headingStyle?: TextStyles;
  descriptionStyle?: TextStyles;
};

const ListItem = ({
  icon,
  title,
  description,
  headingStyle,
  descriptionStyle,
}: ListItemProps) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.swipeItem, {width: width}]}>
      <Image style={styles.image} source={icon} />
      <Text style={[styles.primaryText, headingStyle && headingStyle]}>
        {title}
      </Text>
      <Text
        style={[styles.secondaryText, descriptionStyle && descriptionStyle]}>
        {description}
      </Text>
    </View>
  );
};

export default ListItem;
