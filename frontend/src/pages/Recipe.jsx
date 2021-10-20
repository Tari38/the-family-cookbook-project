import React from "react";
import {
    Page,
    Text,
    View,
    Document
} from "@react-pdf/renderer";

import styles from "./App";


export function PdfRecipe(props) {
    console.log("pdf props", props.data);
    return (
        <Document>
            <Page style={styles.page}>
                {props.data
                    ? props.data.map((a, index) => {
                            return (
                                <View key={index} style={styles.recipeContainer}>
                                    
                                    <View style={styles.recipeDetails}>
                                        <Text style={styles.recipeTitle}>{a.title}</Text>
                                        
                                        
                                        <View style={styles.detailsFooter}>
                                            <Text style={styles.lang}>
                                                Language: {a.original_language.toUpperCase()}
                                            </Text>
                                          
                                        </View>
                                    </View>
                                </View>
                            );
                    })
                : ""}
            </Page>
        </Document>
    );
}