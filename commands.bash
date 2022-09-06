# Install fontawesome
npm install --save @fortawesome/fontawesome-free
# ----------------------
# Angular
# ----------------------

# Add Angular Material
ng add @angular/material

# Create new component
ng generate component modules/base/components/[component-name]
ng generate component modules/base/components/sidebar
# long form but redundant
ng generate component modules/base/components/sidebar --module=modules/base/base.module.ts
ng generate component modules/base/components/header --module=modules/base/base.module.ts


# Generate component in core
ng generate component core/components/header --module=modules/home/home.module.ts

