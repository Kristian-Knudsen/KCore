import os
from sys import argv

filePath = './src/Components'

def main():
    componentName = argv[1]
    createFolderIfNotExists(componentName)
    checkComponentFolderHaveFiles(componentName)

def createFolderIfNotExists(folderName):
    toFindFilePath = f"{filePath}/{folderName.capitalize()}"
    if not os.path.exists(toFindFilePath):
        os.makedirs(toFindFilePath)

def checkComponentFolderHaveFiles(componentName):
    internalFilePath = f"{filePath}/{componentName.capitalize()}/{componentName}"
    if not os.path.isfile(f"{internalFilePath}.vue"):
        createFile(componentName, 'vue')
    if not os.path.isfile(f"{internalFilePath}.stories.ts"):
        createFile(componentName, 'stories.ts')
    if not os.path.isfile(f"{internalFilePath}.scss"):
        createFile(componentName, 'scss')

def createFile(componentName, extension):
    if extension == 'vue':
        createVueFile(componentName)
    if extension == 'stories.ts':
        createStoryFile(componentName)
    if extension == 'scss':
        createScssFile(componentName)


def createVueFile(name):
    with open(f"{filePath}/{name.capitalize()}/{name.capitalize()}.vue", "w") as f:
        f.write(f'''<script setup lang="ts">
import './{name}.scss';
import {{ computed }} from 'vue';
const props = defineProps({{}});

const classes = computed(() => ({{
    'k-{name.lower()}': true,
}}));
</script>
<template>
    <div :class="classes"></div>
</template>''')

def createStoryFile(name):
    with open(f"{filePath}/{name.capitalize()}/{name.capitalize()}.stories.ts", "w") as f:
        f.write(f'''import {name.capitalize()} from './{name.capitalize()}.vue';
import {{Meta, StoryFn}} from '@storybook/vue3';

export default {{
    title: "{name.capitalize()}",
    component: {name.capitalize()},
    argTypes: {{}}
}} as Meta<typeof {name.capitalize()}>;

const Template: StoryFn<typeof {name.capitalize()}> = (args) => ({{
    components: {{ {name.capitalize()} }},
    setup() {{
        return {{ args }};
    }},
    template: '<{name.capitalize()} v-bind="args" />'
}});

export const Base = Template.bind({{}});
// Base.args = {{ }};''')

def createScssFile(name):
    with open(f"{filePath}/{name.capitalize()}/{name.capitalize()}.scss", "w") as f:
        f.write(f'''@use '../../Variables.scss' as *;

.k-{name.lower()} {{}}''')

if(__name__ == '__main__'):
    main()


# import os
#   import re
#
#   # Define the path to the directory containing Vue and TS files
#   directory_path = "path/to/directory"
#
#   # Define the characters to find
#   characters_to_find = ['$', '@', '%']
#
#   # Loop through each file in the directory
#   for filename in os.listdir(directory_path):
#       if filename.endswith(".vue") or filename.endswith(".ts"):
#           file_path = os.path.join(directory_path, filename)
#           with open(file_path, 'r') as file:
#               line_number = 0
#               for line in file:
#                   line_number += 1
#                   for character in characters_to_find:
#                       if character in line:
#                           print(f"File: {filename}, Character: {character}, Line: {line_number}, Content: {line.strip()}")
