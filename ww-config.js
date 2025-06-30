export default {
  editor: {
    label: {
      en: "shadcn Textarea",
      fr: "Zone de texte shadcn"
    },
    icon: 'fas fa-align-left',
    bubble: {
      icon: 'fas fa-align-left'
    },
    deprecated: false
  },
  properties: {
    placeholder: {
      label: {
        en: "Placeholder",
        fr: "Texte indicatif"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "content"
    },
    label: {
      label: {
        en: "Label",
        fr: "Libellé"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "content"
    },
    helpText: {
      label: {
        en: "Help text",
        fr: "Texte d'aide"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "content"
    },
    disabled: {
      label: {
        en: "Disabled",
        fr: "Désactivé"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true,
      section: "behavior"
    },
    readonly: {
      label: {
        en: "Read only",
        fr: "Lecture seule"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true,
      section: "behavior"
    },
    required: {
      label: {
        en: "Required",
        fr: "Requis"
      },
      type: "OnOff",
      defaultValue: false,
      section: "validation"
    },
    rows: {
      label: {
        en: "Rows",
        fr: "Lignes"
      },
      type: "Number",
      defaultValue: 4,
      section: "dimensions"
    },
    cols: {
      label: {
        en: "Columns",
        fr: "Colonnes"
      },
      type: "Number",
      defaultValue: null,
      section: "dimensions"
    },
    maxLength: {
      label: {
        en: "Max length",
        fr: "Longueur maximum"
      },
      type: "Number",
      defaultValue: null,
      bindable: true,
      section: "validation"
    },
    minLength: {
      label: {
        en: "Min length",
        fr: "Longueur minimum"
      },
      type: "Number",
      defaultValue: null,
      bindable: true,
      section: "validation"
    },
    showCounter: {
      label: {
        en: "Show character counter",
        fr: "Afficher le compteur de caractères"
      },
      type: "OnOff",
      defaultValue: false,
      hidden: content => !content.maxLength,
      section: "appearance"
    },
    resize: {
      label: {
        en: "Resize",
        fr: "Redimensionnable"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "none", label: { en: "None", fr: "Non" } },
          { value: "vertical", label: { en: "Vertical", fr: "Vertical" } },
          { value: "horizontal", label: { en: "Horizontal", fr: "Horizontal" } },
          { value: "both", label: { en: "Both", fr: "Les deux" } }
        ]
      },
      defaultValue: "vertical",
      section: "behavior"
    },
    errorMessage: {
      label: {
        en: "Error message",
        fr: "Message d'erreur"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "validation"
    },
    hasError: {
      label: {
        en: "Has error",
        fr: "A une erreur"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true,
      section: "validation"
    },
    wewebVariable: {
      label: {
        en: "Weweb variable",
        fr: "Variable Weweb"
      },
      type: "Variable",
      bindable: true,
      section: "data"
    },
    changeWorkflowId: {
      label: {
        en: "Change workflow",
        fr: "Workflow de changement"
      },
      type: "WorkflowId",
      bindable: true,
      section: "behavior"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  events: {
    change: {
      label: {
        en: "On change",
        fr: "Lors du changement"
      },
      default: null
    },
    focus: {
      label: {
        en: "On focus",
        fr: "Lors du focus"
      },
      default: null
    },
    blur: {
      label: {
        en: "On blur",
        fr: "Lors de la perte de focus"
      },
      default: null
    }
  },
  sections: {
    content: {
      label: { en: "Content", fr: "Contenu" },
      expand: true
    },
    dimensions: {
      label: { en: "Dimensions", fr: "Dimensions" },
      expand: false
    },
    appearance: {
      label: { en: "Appearance", fr: "Apparence" },
      expand: false
    },
    validation: {
      label: { en: "Validation", fr: "Validation" },
      expand: false
    },
    behavior: {
      label: { en: "Behavior", fr: "Comportement" },
      expand: false
    },
    data: {
      label: { en: "Data", fr: "Données" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 